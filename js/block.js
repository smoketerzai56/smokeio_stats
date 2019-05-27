
Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/blockchain_total.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var post = unpack(rows, 'post');
var comment = unpack(rows, 'comment');
var date = unpack(rows,'Row Labels');
var total = unpack(rows, 'Grand Total');
var vote = unpack(rows, 'vote')

var x = rows

var l = [];
var o = {};
var f = function(x){
    console.log(x["account_create"]);
    var dt_object = Date(x["account_create"]); // convert to datetime object
    console.log(dt_object);
    var key = dt_object.year + '-' + dt_object.month;
    console.log(key);
    if (o[key] === undefined) {
        o[key] = [];
        console.log(o[key]);
    };

    o[key].push(x)
};

_.map(l, f(x)) //apply f to each member of l

console.log(l)

for (var graph_num = 0 ; graph_num < 6; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);
  switch(graph_num){
    case 0:

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
          range: ['2018-09-23', '2019-05-18'],
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
          rangeslider: {range: ['2018-09-23', '2019-05-18']},
          type: 'date'
        },
      yaxis: {
        autorange: true,
        type: 'linear'
  }
      };
      var data = [trace1,trace2,trace3]
      break

      case 1:
        //var post = unpack(rows, 'post')
        post = post.slice(-30)
        //var comment = unpack(rows, 'comment')
        comment = comment.slice(-30)
        //var date = unpack(rows,'Row Labels')
        date = date.slice(-30)

        var trace1 =
        {
          type: 'bar',
          name: 'comments',
          hoverinfo: 'none',
          x: date,
          y: comment,
          marker: {
            color: '#20998a'
          },
        };

        var trace2 =
        {
          type: 'bar',
          name: 'posts',
          hoverinfo: 'none',
          x: date,
          y: post,
          marker: {
            color: '#afdc2f'
          },
        };

        var layout = {
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'stack',
          title: 'SMOKE.IO Posts / Comments (Last 30 Days)',
          titlefont:{color: '#afdc2f'},
          width: 740,
          showlegend: true,
          legend: {
            x: 0.1,
            y: 1.1
          },
          yaxis: {color: '#696969'},
          xaxis: {
            tickangle: '-60',
            color: '#696969'},
        };
        var data = [trace1,trace2]
        break

        case 2:

          //var date = unpack(rows,'Row Labels')

          var trace1 =
          {
            type: 'bar',
            name: 'Operations',
            hoverinfo: 'none',
            x: date,
            y: total,
            marker: {
              color: '#afdc2f'
            },
          };

          var layout = {
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'stack',
          title: 'SMOKE.IO Operations',
          titlefont:{color: '#afdc2f'},
          width: 740,
          showlegend: true,
          legend: {
            x: 0.1,
            y: 1.1
          },
          yaxis: {color: '#696969'},
          xaxis: {
            tickangle: '-60',
            color: '#696969'},
        };
          var data = [trace1]
          break

          case 3:
            //var total = unpack(rows, 'Grand Total')
            total = total.slice(-30)
            //var date = unpack(rows,'Row Labels')
            date = date.slice(-30)

            var trace1 =
            {
              type: 'bar',
              name: 'operations',
              hoverinfo: 'none',
              x: date,
              y: total,
              marker: {
                color: '#afdc2f'
              },
            };

              var layout = {
              paper_bgcolor: '#F5F5F5',
              plot_bgcolor: '#F5F5F5',
              barmode: 'stack',
              title: 'SMOKE.IO Operations (Last 30 Days)',
              titlefont:{color: '#afdc2f'},
              width: 740,
              showlegend: true,
              legend: {
                x: 0.1,
                y: 1.1
              },
              yaxis: {color: '#696969'},
              xaxis: {
                tickangle: '-60',
                color: '#696969'},
            };
            var data = [trace1]
            break

          case 4:

            var date = unpack(rows,'Row Labels')

            var trace1 =
            {
              type: 'bar',
              name: 'smokes',
              hoverinfo: 'none',
              x: date,
              y: vote,
              marker: {
                color: '#afdc2f'
              },
            };

            var layout = {
            paper_bgcolor: '#F5F5F5',
            plot_bgcolor: '#F5F5F5',
            barmode: 'stack',
            title: 'SMOKE.IO Smokes',
            titlefont:{color: '#afdc2f'},
            width: 740,
            showlegend: true,
            legend: {
              x: 0.1,
              y: 1.1
            },
            yaxis: {color: '#696969'},
            xaxis: {
              tickangle: '-60',
              color: '#696969'},
          };
            var data = [trace1]
            break

            case 5:
              //var vote = unpack(rows, 'vote')
              vote = vote.slice(-30)
              //var date = unpack(rows,'Row Labels')
              date = date.slice(-30)

              var trace1 =
              {
                type: 'bar',
                name: 'smokes',
                hoverinfo: 'none',
                x: date,
                y: vote,
                marker: {
                  color: '#afdc2f'
                },
              };

                var layout = {
                paper_bgcolor: '#F5F5F5',
                plot_bgcolor: '#F5F5F5',
                barmode: 'stack',
                title: 'SMOKE.IO Smokes (Last 30 Days)',
                titlefont:{color: '#afdc2f'},
                width: 740,
                showlegend: true,
                legend: {
                  x: 0.1,
                  y: 1.1
                },
                yaxis: {color: '#696969'},
                xaxis: {
                  tickangle: '-60',
                  color: '#696969'},
              };
              var data = [trace1]
              break
  }

  //console.log(data);

  Plotly.newPlot(graph_div, data, layout);
  Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | Transactions'});
}
})
