// Layout.tsx

import React, { ReactNode, useEffect, useState } from 'react';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import './../App.css'; // Импортируем стиль с облаком

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showCloud, setShowCloud] = useState(false);
    const [showBottomCloud, setShowBottomCloud] = useState(false);

    useEffect(() => {
        // Устанавливаем задержку перед отображением верхнего облака
        const timeout1 = setTimeout(() => {
            setShowCloud(true);
        }, 1000); // 1000 миллисекунд (1 секунда)

        // Устанавливаем задержку перед отображением нижнего облака
        const timeout2 = setTimeout(() => {
            setShowBottomCloud(true);
        }, 3000); // 3000 миллисекунд (3 секунды), с учетом задержки для верхнего облака

        // Очищаем таймауты, чтобы избежать утечек памяти
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <>
            <CssBaseline />
            {/* Верхнее облако */}
            {showCloud && (
                <div className="cloud-container top-cloud" />
            )}
            {/* Нижнее облако */}
            {showBottomCloud && (
                <div className="cloud-container bottom-cloud" />
            )}
            <div className="LayoutContainer">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ margin: 'auto', fontSize: '110px' }}>TWeb Lab Layout</Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
};

export default Layout;
