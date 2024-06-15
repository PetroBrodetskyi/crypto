import { Layout, Card, Statistic, List, Typography, Spin, Tag } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize } from '../../utilus'

const siderStyle = {
  padding: '1rem',
};

function AppSider() {
  

  if (loading) {
    return <Spin fullscreen />
  }

  return <Layout.Sider width="25%" style={siderStyle}>
    {assets.map(asset => (
      <Card key={asset.id} style={{marginBottom: '1rem'}}>
        <Statistic
            title={capitalize(asset.id)}
              value={asset.totalAmount}
              precision={2}
              valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
              prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$" />
              <List
                size='small'
                dataSource={[
                  { title: 'Total Profit', value: asset.totalProfit, widthTag: true},
                  { title: 'Asset Amount', value: asset.amount, isPlane: true },
                  // { title: 'Difference', value: asset.growPercent },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>
                      {item.widthTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                      {item.isPlane && item.value}
                      {!item.isPlane && <Typography.Text type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$
                      </Typography.Text>}
                    </span>
                </List.Item>
              )}
        />
      </Card>
    ))}
    </Layout.Sider>
}

export default AppSider;