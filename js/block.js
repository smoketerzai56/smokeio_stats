
Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/blockchain_total_daily.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var post = unpack(rows, 'post');
var comment = unpack(rows, 'comment');
var date = unpack(rows,'Row Labels');
var total = unpack(rows, 'Grand Total');
var vote = unpack(rows, 'vote')
var month = unpack(rows, 'month')

console.log(date)


var graph_div = document.createElement("div");
graph_div.id = "graph-5";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);


/*
for (var graph_num = 0 ; graph_num < 6; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);
  switch(graph_num){
    case 0:
*/
    //console.log(comment);
    //console.log(date);
      var trace2 =
      {
        type: "scatter",
        mode: "lines",
        name: 'comments',
        hoverinfo: 'none',
        x: date,
        y: comment,

        line: {
          color: '#20998a'
        },
      };

      var trace1 =
      {
        type: "scatter",
        mode: "lines",
        name: 'posts',
        hoverinfo: 'none',

        x: date,
        y: post,
        line: {
          color: '#afdc2f'
        },
      };

      var trace3 =
      {
        type: "scatter",
        mode: "lines",
        name: 'smokes',
        hoverinfo: 'none',

        x: date,
        y: vote,
        line: {
          color: '#FF8C00'
        },
      };

      var layout = {
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title:'SMOKE.IO Posts / Comments',
        titlefont:{color: '#afdc2f'},
        width: 740,
        showlegend: true,
        legend: {
          orientation: 'h',
          x: 0.1,
          y: 1.15
        },
        xaxis: {
          autorange: true,
          range: ['2018-09-23', '2019-07-20'],
          rangeselector: {
            x: 0.7,
            y: 1,
            buttons: [
              {
                count: 1,
                label: '1 Month',
                step: 'month',
                stepmode: 'backward'
              },
              {
                count: 6,
                label: '6 Months',
                step: 'month',
                stepmode: 'backward'
              },
              {step: 'all'}
            ]},
          rangeslider: {range: ['2018-09-23', '2019-07-20']},
          type: 'date'
        },
      yaxis: {
        autorange: true,
        type: 'linear'
  }
      };
      var data = [trace1,trace2,trace3]


  Plotly.newPlot(graph_div, data, layout);
  Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | Transactions'});

})



Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/blockchain_total_weekly.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var post = unpack(rows, 'post');
var comment = unpack(rows, 'comment');
var date = unpack(rows,'Row Labels');
var total = unpack(rows, 'Grand Total');
var vote = unpack(rows, 'vote')
var month = unpack(rows, 'month')
var comment_last8weeks = comment.slice(-8)

var post_last8weeks = post.slice(-8)
//console.log(post_last8weeks);
var date_last8Weeks = date.slice(-8)
var total_last8Weeks = total.slice(-8)


for (var graph_num = 0 ; graph_num < 4; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  switch(graph_num){
    case 0:
      var trace1 = {
        type: 'bar',
        name: 'Comments',
        text: comment,
        textposition: 'inside',
        //textfont: {color: '#afdc2f'},
        textfont: {color: '#F5F5F5'},
        hoverinfo: 'none',
        x: date,
        y: comment,
        marker: {
          color: '#afdc2f'
        },
      };

      var trace2 = {
        type: 'bar',
        name: 'Post',
        text: post,
        textposition: 'inside',
        textfont: {color: '#F5F5F5'},
        x: date,
        y: post,
        marker: {
          color: '#20998a'
        },
      };

      var layout = {
        titlefont:{color: '#afdc2f'},
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title: 'SMOKE.IO | Weekly | Posts & Comments | All',
        width: 740,
        showlegend: true,
        legend: {
          orientation: 'h',
          x: 0.1,
          y: 1.1
        },
        yaxis: {color: '#696969',
                //range: [6400, 7500],
              },
        xaxis: {
          tickangle: '-45',
          color: '#696969'},
      };

      var data = [trace2,trace1];
      break

    case 1:
      var trace1 = {
        type: 'bar',
        name: 'Comments',
        text: comment_last8weeks,
        textposition: 'inside',
        //textfont: {color: '#afdc2f'},
        textfont: {color: '#F5F5F5'},
        hoverinfo: 'none',
        x: date_last8Weeks,
        y: comment_last8weeks,
        marker: {
          color: '#afdc2f'
        },
      };

      var trace2 = {
        type: 'bar',
        name: 'Post',
        text: post_last8weeks,
        textposition: 'inside',
        textfont: {color: '#F5F5F5'},
        x: date_last8Weeks,
        y: post_last8weeks,
        marker: {
          color: '#20998a'
        },
      };

      var layout = {
        titlefont:{color: '#afdc2f'},
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title: 'SMOKE.IO | Weekly | Posts & Comments | Last 8 Weeks',
        width: 740,
        showlegend: true,
        legend: {
          orientation: 'h',
          x: 0.1,
          y: 1.1
        },
        yaxis: {color: '#696969',
                //range: [6400, 7500],
              },
        xaxis: {
          tickangle: '-45',
          color: '#696969'},
      };

      var data = [trace2,trace1];
      break


  case 2:
    var trace1 = {
      type: 'bar',
      name: 'Operations',
      text: total,
      textposition: 'inside',
      //textfont: {color: '#afdc2f'},
      textfont: {color: '#F5F5F5'},
      hoverinfo: 'none',
      x: date,
      y: total,
      marker: {
        color: '#afdc2f'
      },
    };
    var layout = {
      titlefont:{color: '#afdc2f'},
      paper_bgcolor: '#F5F5F5',
      plot_bgcolor: '#F5F5F5',
      barmode: 'stack',
      title: 'SMOKE.IO | Weekly | Operations | All',
      width: 740,
      showlegend: true,
      legend: {
        orientation: 'h',
        x: 0.1,
        y: 1.1
      },
      yaxis: {color: '#696969',
              //range: [6400, 7500],
            },
      xaxis: {
        tickangle: '-45',
        color: '#696969'},
    };

    var data = [trace1];
    break

    case 3:
      var trace1 = {
        type: 'bar',
        name: 'Operation',
        text: total_last8Weeks,
        textposition: 'outside',
        //textfont: {color: '#afdc2f'},
        textfont: {color: '#afdc2f'},
        hoverinfo: 'none',
        x: date_last8Weeks,
        y: total_last8Weeks ,
        marker: {
          color: '#afdc2f'
        },
      };
      var layout = {
        titlefont:{color: '#afdc2f'},
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title: 'SMOKE.IO | Weekly | Operations | Last 8 Weeks',
        width: 740,
        showlegend: true,
        legend: {
          orientation: 'h',
          x: 0.1,
          y: 1.1
        },
        yaxis: {color: '#696969',
                //range: [6400, 7500],
              },
        xaxis: {
          autorange: true,
          tickangle: '-45',
          color: '#696969'},
      };

      var data = [trace1];
      break
}


Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | Transactions'});
}
})

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/blockchain_total_monthly.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var post = unpack(rows, 'post');
var comment = unpack(rows, 'comment');
var date = unpack(rows,'Row Labels');
var total = unpack(rows, 'Grand Total');
var vote = unpack(rows, 'vote')
var month = unpack(rows, 'month')

for (var graph_num = 0 ; graph_num < 2; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graphh-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  switch(graph_num){
    case 0:
      var trace1 = {
        type: 'bar',
        name: 'Comments',
        text: comment,
        textposition: 'outside',
        //textfont: {color: '#F5F5F5'},
        textfont: {color: '#afdc2f'},
        hoverinfo: 'none',
        x: date,
        y: comment,
        marker: {
          color: '#afdc2f'
        },
      };

      var trace2 = {
        type: 'bar',
        name: 'Post',
        text: post,
        textposition: 'inside',
        textfont: {color: '#F5F5F5'},
        x: date,
        y: post,
        marker: {
          color: '#20998a'
        },
      };

      var layout = {
        titlefont:{color: '#afdc2f'},
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title: 'SMOKE.IO | Monthly | Posts & Comments | All',
        width: 740,
        showlegend: true,
        legend: {
          orientation: 'h',
          x: 0.1,
          y: 1.1
        },
        yaxis: {color: '#696969',
                range: [0, 33000],
              },
        xaxis: {
          autorange: true,
          tickangle: '-45',
          color: '#696969'},
      };

      var data = [trace2,trace1];
      break

  case 1:
    var trace1 = {
      type: 'bar',
      name: 'Operations',
      text: total,
      textposition: 'outside',
      //textfont: {color: '#afdc2f'},
      textfont: {color: '#afdc2f'},
      hoverinfo: 'none',
      x: date,
      y: total,
      marker: {
        color: '#afdc2f'
      },
    };
    var layout = {
      titlefont:{color: '#afdc2f'},
      paper_bgcolor: '#F5F5F5',
      plot_bgcolor: '#F5F5F5',
      barmode: 'stack',
      title: 'SMOKE.IO | Monthly | Operations | All',
      width: 740,
      showlegend: true,
      legend: {
        orientation: 'h',
        x: 0.1,
        y: 1.1
      },
      yaxis: {color: '#696969',
              range: [0, 150000],
            },
      xaxis: {
        autorange: true,
        tickangle: '-45',
        color: '#696969'},
    };

    var data = [trace1];
    break
}


Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | Transactions'});
}
})
