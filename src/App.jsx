import React from 'react';
import { Button, Card, ConfigProvider, Flex, Layout, List, Tag, Typography, theme } from 'antd';
import { CheckCircleOutlined, FileTextOutlined, ProjectOutlined } from '@ant-design/icons';
import { createRoot } from 'react-dom/client';
import './styles.css';

const workflows = [
  { title: 'Project intake', status: 'Ready', owner: 'Office' },
  { title: 'Material request', status: 'In review', owner: 'Warehouse' },
  { title: 'Field update', status: 'Scheduled', owner: 'Field' },
];

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <Layout className="app-shell">
        <Layout.Header className="app-header">
          <Flex align="center" justify="space-between">
            <Typography.Title level={3}>Field View Toolkit</Typography.Title>
            <Button type="primary" icon={<ProjectOutlined />}>New workflow</Button>
          </Flex>
        </Layout.Header>
        <Layout.Content className="app-content">
          <section className="summary-grid">
            <Card>
              <FileTextOutlined className="summary-icon" />
              <Typography.Title level={4}>12</Typography.Title>
              <Typography.Text>Active documents</Typography.Text>
            </Card>
            <Card>
              <CheckCircleOutlined className="summary-icon" />
              <Typography.Title level={4}>8</Typography.Title>
              <Typography.Text>Ready for review</Typography.Text>
            </Card>
          </section>
          <Card title="Workflow queue">
            <List
              dataSource={workflows}
              renderItem={(item) => (
                <List.Item actions={[<Tag key={item.status}>{item.status}</Tag>]}>
                  <List.Item.Meta title={item.title} description={item.owner} />
                </List.Item>
              )}
            />
          </Card>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
