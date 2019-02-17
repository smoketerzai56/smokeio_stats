Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/blockchain_total.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 6; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);
  switch(graph_num){
    case 0:
      var post = unpack(rows, 'post')
      var comment = unpack(rows, 'comment')
      var date = unpack(rows,'Row Labels')

      var trace1 =
      {
        type: 'scatter',
        mode: 'lines',
        name: 'comments',
        hoverinfo: 'none',
        x: date,
        y: comment,
        line: {
          shape: 'spline',
          smoothing: 1.3,
          color: '#20998a',
        }
      };

      var trace2 =
      {
        type: 'scatter',
        mode: 'lines',
        name: 'posts',
        hoverinfo: 'none',
        x: date,
        y: post,
        line: {
          shape: 'spline',
          smoothing: 1.3,
          color: '#afdc2f',
        }
      };

      var layout = {
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'bar',
        title:'SMOKE.IO Posts / Comments',
        titlefont:{color: '#afdc2f'},
        width: 740,
        showlegend: true,
        legend: {
          x: 1,
          y: 0.5
        },
        yaxis: {color: '#696969'},
        xaxis: {color: '#696969'},
      };
      var data = [trace1,trace2]
      break

      case 1:
        var post = unpack(rows, 'post')
        post = post.slice(-30)
        var comment = unpack(rows, 'comment')
        comment = comment.slice(-30)
        var date = unpack(rows,'Row Labels')
        date = date.slice(-30)

        var trace1 =
        {
          type: 'scatter',
          mode: 'lines',
          name: 'comments',
          hoverinfo: 'none',
          x: date,
          y: comment,
          line: {
            shape: 'spline',
            smoothing: 1.3,
            color: '#20998a',
          }
        };

        var trace2 =
        {
          type: 'scatter',
          mode: 'lines',
          name: 'posts',
          hoverinfo: 'none',
          x: date,
          y: post,
          line: {
            shape: 'spline',
            smoothing: 1.3,
            color: '#afdc2f',
          }
        };

        var layout = {
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'bar',
          title: 'SMOKE.IO Posts / Comments (Last 30 Days)',
          titlefont:{color: '#afdc2f'},
          width: 740,
          showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
          yaxis: {color: '#696969'},
          xaxis: {color: '#696969'},
        };
        var data = [trace1,trace2]
        break

        case 2:
          var total = unpack(rows, 'Grand Total')
          var date = unpack(rows,'Row Labels')

          var trace1 =
          {
            type: 'scatter',
            mode: 'lines',
            name: 'transactions',
            hoverinfo: 'none',
            x: date,
            y: total,
            line: {
              shape: 'spline',
              smoothing: 1.3,
              color: '#afdc2f',
            }
          };

          var layout = {
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'bar',
          title: 'SMOKE.IO Transactions',
          titlefont:{color: '#afdc2f'},
          width: 740,
          showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
          yaxis: {color: '#696969'},
          xaxis: {color: '#696969'},
        };
          var data = [trace1]
          break

          case 3:
            var total = unpack(rows, 'Grand Total')
            total = total.slice(-30)
            var date = unpack(rows,'Row Labels')
            date = date.slice(-30)

            var trace1 =
            {
              type: 'scatter',
              mode: 'lines',
              name: 'transactions',
              hoverinfo: 'none',
              x: date,
              y: total,
              line: {
                shape: 'spline',
                smoothing: 2,
                color: '#afdc2f',
              }
            };

              var layout = {
              paper_bgcolor: '#F5F5F5',
              plot_bgcolor: '#F5F5F5',
              barmode: 'bar',
              title: 'SMOKE.IO Transactions (Last 30 Days)',
              titlefont:{color: '#afdc2f'},
              width: 740,
              showlegend: true,
              legend: {
                x: 1,
                y: 0.5
              },
              yaxis: {color: '#696969'},
              xaxis: {color: '#696969'},
            };
            var data = [trace1]
            break

          case 4:
            var vote = unpack(rows, 'vote')
            var date = unpack(rows,'Row Labels')

            var trace1 =
            {
              type: 'scatter',
              mode: 'lines',
              name: 'smokes',
              hoverinfo: 'none',
              x: date,
              y: vote,
              line: {
                shape: 'spline',
                smoothing: 1.3,
                color: '#afdc2f',
              }
            };

            var layout = {
            paper_bgcolor: '#F5F5F5',
            plot_bgcolor: '#F5F5F5',
            barmode: 'bar',
            title: 'SMOKE.IO Smokes',
            titlefont:{color: '#afdc2f'},
            width: 740,
            showlegend: true,
            legend: {
              x: 1,
              y: 0.5
            },
            yaxis: {color: '#696969'},
            xaxis: {color: '#696969'},
          };
            var data = [trace1]
            break

            case 5:
              var vote = unpack(rows, 'vote')
              vote = vote.slice(-30)
              var date = unpack(rows,'Row Labels')
              date = date.slice(-30)

              var trace1 =
              {
                type: 'scatter',
                mode: 'lines',
                name: 'smokes',
                hoverinfo: 'none',
                x: date,
                y: vote,
                line: {
                  shape: 'spline',
                  smoothing: 2,
                  color: '#afdc2f',
                }
              };

                var layout = {
                paper_bgcolor: '#F5F5F5',
                plot_bgcolor: '#F5F5F5',
                barmode: 'bar',
                title: 'SMOKE.IO Smokes (Last 30 Days)',
                titlefont:{color: '#afdc2f'},
                width: 740,
                showlegend: true,
                legend: {
                  x: 1,
                  y: 0.5
                },
                yaxis: {color: '#696969'},
                xaxis: {color: '#696969'},
              };
              var data = [trace1]
              break
  }

  //console.log(data);

  Plotly.newPlot(graph_div, data, layout);
  Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | Transactions'});
}
})
