Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/weekly_signup.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 4; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  switch(graph_num){
    case 0:
      var x = unpack(rows, 'week')
      var y = unpack(rows, 'new_user')
      var text = y.map(String)
      var trace1 =
      {
        type: 'bar',
        name: 'New Daily Account Creation',
        text: text,
        textposition: 'outside',
        textfont: {color: '#afdc2f'},
        hoverinfo: 'none',
        x: x,
        y: y,
        marker: {
          color: '#afdc2f',
        },
      };

      var layout = {
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'bar',
        title: 'SMOKE.IO | Weekly | New User Signups | All',
        titlefont:{color: '#afdc2f'},
        width: 740,
        showlegend: true,
        legend: {
          x: 0.1,
          y: 1.1
        },
        yaxis: {color: '#696969'},
        xaxis: {
          tickangle: '-45',
          color: '#696969'},
      };
      var data = [trace1]
      break


      case 1:

        var last_four_weeks = unpack(rows, 'week')
        var x = last_four_weeks.slice(-8)

        var last_four_new_user = unpack(rows, 'new_user')
        var y = last_four_new_user.slice(-8)

        var text = y.map(String)

        var trace1 =
        {
          type: 'bar',
          name: 'New Daily Account Creation',
          text: text,
          textposition: 'outside',
          textfont: {color: '#afdc2f'},
          hoverinfo: 'none',
          x: x,
          y: y,
          marker: {
            color: '#afdc2f',
          },
        };

        var layout = {
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'bar',
          title: 'SMOKE.IO | Weekly | New User Signups | Last 8 Weeks',
          titlefont:{color: '#afdc2f'},
          width: 740,
          showlegend: true,
          legend: {
            x: 0.1,
            y: 1.1
          },
          yaxis: {color: '#696969'},
          xaxis: {
            tickangle: '-45',
            color: '#696969'},
       };
        var data = [trace1]
        break

      case 2:
        var last_four_weeks = unpack(rows, 'week')
        var x = last_four_weeks.slice(-8)

        var last_four_new_user = unpack(rows, 'new_user')
        var y = last_four_new_user.slice(-8)

        var last_four_old_user = unpack(rows, 'old_user')
        var y_old_user = last_four_old_user.slice(-8)

        var total = unpack(rows, 'total_user')
        total = total.slice(-8)
        //console.log('total',total)
        var text = total.map(String)
        var trace1 = {
          type: 'bar',
          name: 'New Daily Account Creation',
          text: total,
          textposition: 'outside',
          textfont: {color: '#afdc2f'},
          hoverinfo: 'none',
          x: x,
          y: y,
          marker: {
            color: '#afdc2f'
          },
        }

        var trace2 = {
          type: 'bar',
          name: 'Previous Daily Account Creation',
          text: y_old_user,
          textposition: 'inside',
          textfont: {color: '#F5F5F5'},
          x: x,
          y: y_old_user,
          marker: {
            color: '#20998a'
          },
        }


        var layout = {
          titlefont:{color: '#afdc2f'},
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'stack',
          title: 'SMOKE.IO | Weekly | Total User Signups | Last 8 Weeks',
          width: 740,
          showlegend: true,
          legend: {
            orientation: 'h',
            x: 0.1,
            y: 1.1
          },
          yaxis: {color: '#696969',
                  range: [6200, 7000],
                },
          xaxis: {
            tickangle: '-45',
            color: '#696969'},
        }

        var data = [trace2,trace1];
        break

    case 3:

    var week = unpack(rows, 'week')
    var new_user = unpack(rows, 'new_user')
    var old_user = unpack(rows, 'old_user')
    var total = unpack(rows, 'total_user')

    //console.log('total',total)
    var text = total.map(String)
    var trace1 = {
      type: 'bar',
      name: 'New Daily Account Creation',
      text: total,
      textposition: 'outside',
      textfont: {color: '#afdc2f'},
      hoverinfo: 'none',
      x: week,
      y: new_user,
      marker: {
        color: '#afdc2f'
      },
    }

    var trace2 = {
      type: 'bar',
      name: 'Previous Daily Account Creation',
      text: old_user,
      textposition: 'inside',
      textfont: {color: '#F5F5F5'},
      x: week,
      y: old_user,
      marker: {
        color: '#20998a'
      },
    }


    var layout = {
      titlefont:{color: '#afdc2f'},
      paper_bgcolor: '#F5F5F5',
      plot_bgcolor: '#F5F5F5',
      barmode: 'stack',
      title: 'SMOKE.IO | Weekly | Total User Signups | All',
      width: 740,
      showlegend: true,
      legend: {
        orientation: 'h',
        x: 0.1,
        y: 1.1
      },
      yaxis: {color: '#696969',
              range: [0, 7000],
            },
      xaxis: {
        tickangle: '-45',
        color: '#696969'},
    }

    var data = [trace2,trace1];
    break
  }

  Plotly.newPlot(graph_div, data, layout);
  Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | weekly Total User Signup'});
}
})

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/daily_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-3";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);

var x = unpack(rows, 'date')
//x = x.slice(-30)
var y = unpack(rows, 'new_user')
//y = y.slice(-30)

var trace1 = {
  type: 'bar',
  name: 'Daily Account Creation',
  textposition: 'outside',
  textfont: {color: '#afdc2f'},
  hoverinfo: 'none',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'new_user'),
  marker: {
    color: '#afdc2f'
  },
}

var layout = {
  titlefont:{color: '#afdc2f'},
  paper_bgcolor: '#F5F5F5',
  plot_bgcolor: '#F5F5F5',
  barmode: 'bar',
  title: 'SMOKE.IO | Daily | New User Signups | All',
  width: 740,
  showlegend: true,
  legend: {
    x: 0.1,
    y: 1.1
  },
  yaxis: {
    color: '#696969',
    showgrid: true,
  },
  xaxis: {
    //tickmode: 'array',
    /* Set the values at which ticks on this axis appear */
    //tickvals: ['29-09-2018','20-10-2018','10-11-2018','01-12-2018','22-12-2018','12-01-2019','02-02-2019','23-02-2019','16-03-2019','06-04-2019','27-04-2019','11-05-2019'],
    /* Set the text displayed at the ticks position via tickvals */
    //
    //ticktext: ['29/09/2018','20/10/2018','10/11/2018','01/12/2018','22/12/2018','12/01/2019','02/02/2019','23/02/2019','16/03/2019','06/04/2019','27/04/2019','11/05/2019'],
    //nticks: 7,
    tickangle: -45,
    showgrid: true,
    color: '#696969',
  },
}

var data = [trace1]

//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO Daily 30 days Signups Users'});

})

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/daily_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-4";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);

var x = unpack(rows, 'date')
x = x.slice(-7)
var y = unpack(rows, 'new_user')
y = y.slice(-7)

text = y


var trace1 =
{
  type: 'bar',
  name: 'New Daily Account Creation',
  textposition: 'outside',
  textfont: {color: '#afdc2f'},
  text: text,
  x: x,
  y: y,
  marker: {
    color: '#afdc2f',
  },
};


var layout = {
  titlefont:{color: '#afdc2f'},
  paper_bgcolor: '#F5F5F5',
  plot_bgcolor: '#F5F5F5',
  barmode: 'bar',
  title: 'SMOKE.IO | Daily | New User Signups | Last 7 days',
  width: 740,
  showgrid: true,
  showlegend: true,
  legend: {
    x: 0.1,
    y: 1.1
  },
  yaxis: {
    color: '#696969',
  },
  xaxis: {
    tickangle: '-45',
    color: '#696969',
  },
};
var data = [trace1]


//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO Daily 7 days Signups Users'});

})

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/monthly_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-4";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);


var total = unpack(rows, 'total_user')
//console.log('total',total)
var text = total.map(String)

var trace1 = {
  type: 'bar',
  name: 'New Daily Account Creation',
  text: text,
  textposition: 'outside',
  textfont: {color: '#afdc2f'},
  hoverinfo: 'none',
  x: unpack(rows, 'month'),
  y: unpack(rows, 'new_user'),
  marker: {
    color: '#afdc2f'
  },
}

var trace2 = {
  type: 'bar',
  name: 'Previous Daily Account Creation',
  x: unpack(rows, 'month'),
  y: unpack(rows, 'old_user'),
  marker: {
    color: '#20998a'
  },
}
var data = [trace2,trace1];

var layout = {
  titlefont:{color: '#afdc2f'},
  paper_bgcolor: '#F5F5F5',
  plot_bgcolor: '#F5F5F5',
  barmode: 'stack',
  title: 'SMOKE.IO | Monthly | Total User Signups | All',
  width: 740,
  showlegend: true,
  legend: {
    orientation: 'h',
    x: 0.1,
    y: 1.1
  },
  yaxis: {color: '#696969'},
  xaxis: {
    tickangle: '-45',
    color: '#696969'},
  showgrid: true,
};

//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO monthly Total User Signups'});

})
