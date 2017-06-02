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

export default function (api) {
  api.get('/bears', (req, res) => {
    const count = parseInt(req.query.count, 10);

    if (count) res.json(mockBears.slice(0, count));
    else res.json(mockBears);
  });
  api.get('/bear/:id', (req, res) => {
    const bearId = parseInt(req.params.id, 10);

    res.json(mockBears.find(x => x.id === bearId));
  });
}
