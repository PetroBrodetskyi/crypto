import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/crypto-context';
import PortfolioChart from './PortfolioChart';
import AssetsTable from './AssetsTable';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: 'wheat',
  backgroundColor: 'white',
  padding: "1rem",
};

function AppContent() {
  const { assets, crypto } = useCrypto();
  
  const cryptoPriceMap = crypto.reduce((acc, c) => {
    acc[c.id] = c.price;
    return acc;
  }, {});

  const portfolioValue = assets.length > 0 ? 
    assets.map(asset => asset.amount * (cryptoPriceMap[asset.id] || 0))
          .reduce((acc, v) => acc + v, 0)
          .toFixed(2) : 
    '0.00';

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: 'left', color: 'black' }}>
        Portfolio: {' '}
        {portfolioValue}$
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}

export default AppContent;
