const squad=[
"Mulamustafić","Đurović","Smedt","Todorević",
"Mašinović","Karleuša","FuLin","Kruzel",
"Kukavića","Machoqueiro","Margaritis"
];

fixtures: [
{
  team: "FK Sarajevo",
  gf: 0,
  ga: 5,
  stats: {
    possession: "45%",
    shots: 6,
    xg: 0.8
  },
  players: [
    {name:"Machoqueiro", rating:6.5, goals:0},
    {name:"Karleuša", rating:5.9, goals:0}
  ],
  scorers: []
},
{
  team: "Gotham Bats",
  gf: 1,
  ga: 1,
  stats: {
    possession: "52%",
    shots: 10,
    xg: 1.2
  },
  players: [
    {name:"Machoqueiro", rating:7.5, goals:1}
  ],
  scorers: ["Machoqueiro 67'"]
}
]

let table=[
["FK Sarajevo",12],["Gotham Bats",10],["Southmoke",10],["Zalgrilska Milicija FC",5]
];
