// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
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
        label: 'Currency rates between one month',
        Color: 'white',
        data: Y,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        color: 'white',
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="graph">
      <Line
        style={{ color: 'white' }}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${symbol} variation compared to EURO`,
              color: 'white',
            },
            legend: {
              display: true,
              labels: {
                font: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};
export default GraphDesign;
