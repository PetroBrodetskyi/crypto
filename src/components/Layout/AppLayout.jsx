import AppHeader from '../Layout/AppHeader';
import AppSider from '../Layout/AppSider';
import AppContent from '../Layout/AppContent';
import { Layout, Spin } from 'antd';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

function AppLayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
    return <Spin fullscreen />;
    }
    
    return <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
    </Layout>
}

export default AppLayout;