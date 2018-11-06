Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/user_growth.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 2; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  console.log(graph_div.id);

  if(graph_num == 1){
    //console.log('total_user',total_user)
    var x = unpack(rows, 'Week')
    var y = unpack(rows, 'new_user')
    var text = y.map(String)
    var trace1 =
    {
      type: 'bar',
      name: 'new_signup',
      text: text,
      textposition: 'auto',
      hoverinfo: 'none',
      x: x,
      y: y,
      marker: {
        color: 'rgb(4,195,0)',
      },
    };

    var layout = {
      barmode: 'bar',
      title: 'Smoke.io | Weekly New Signup user',
      width: 740,
      legend: {"orientation": "h"},
    };
    var data = [trace1]

  } else {
    var total = unpack(rows, 'total_user')
    console.log('total',total)
    var text = total.map(String)
    var trace1 = {
      type: 'bar',
      name: 'New user',
      text: text,
      textposition: 'auto',
      hoverinfo: 'none',
      x: unpack(rows, 'Week'),
      y: unpack(rows, 'new_user'),
      marker: {
        color: 'rgb(4,195,0)'
      },
    }

    var trace2 = {
      type: 'bar',
      name: 'Older user',
      x: unpack(rows, 'Week'),
      y: unpack(rows, 'old_user'),
      marker: {
        color: 'rgb(89,170,68)'
      },

    }

    var data = [trace2,trace1];

    var layout = {
      barmode: 'stack',
      title: 'Smoke.io | Weekly Growth Signup user',
      width: 740,
      legend: {"orientation": "h"},
    };
  }

  console.log(data);

  Plotly.newPlot(graph_div, data, layout);
}
})