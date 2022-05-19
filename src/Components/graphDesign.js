// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { graphInfo } from '../redux/api/api';

const GraphDesign = ({ symbol }) => {

  const dispatch = useDispatch();
  const graphResult = useSelector((state) => state.ranges);
  const { X, Y } = graphResult.ranges;

  useEffect(() => {
    dispatch(graphInfo(symbol));
  }, [symbol, dispatch]);

  const chartData = {
    labels: X,
    datasets: [
      {
        label: 'Popularity of colours',
        data: Y,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3,
      }
    ]
  };


  return (
    <div>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
            }
          }
        }}
      />
    </div>
  )
}
export default GraphDesign; 