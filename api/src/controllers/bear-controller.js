const mockBears = [
  { id: 11, name: 'Jammy' },
  { id: 12, name: 'Charlie' },
  { id: 13, name: 'Hohots' },
  { id: 14, name: 'Henri' },
  { id: 15, name: 'Art' },
  { id: 16, name: 'Coco' },
  { id: 17, name: 'Edun' },
  { id: 18, name: 'Kuruk' },
  { id: 19, name: 'Bemot' },
  { id: 20, name: 'Telutci' },
];

function findBear(id) {
  const bearId = parseInt(id, 10);
  return mockBears.find(x => x.id === bearId);
}

export default function (api) {
  api.route('/bears')
    .get((req, res) => {
      const count = parseInt(req.query.count, 10);

      if (count) res.json(mockBears.slice(0, count));
      else res.json(mockBears);
    })
    .post((req, res) => {
      const lastBear = mockBears[mockBears.length - 1];
      const newBear = {
        id: lastBear.id + 1,
        name: req.body.name,
      };
      mockBears.push(newBear);

      res.json({ id: newBear.id });
    });

  api.route('/bear/:id')
    .get((req, res) => {
      res.json(findBear(req.params.id));
    })
    .put((req, res) => {
      const bear = findBear(req.params.id);
      bear.name = req.body.name;

      res.sendStatus(200);
    })
    .delete((req, res) => {
      const bear = findBear(req.params.id);
      const index = mockBears.indexOf(bear);
      mockBears.splice(index, 1);

      res.sendStatus(200);
    });
}
