import { AppProvider } from '../providers/AppProvider';
import { MuiRegistry } from '../providers/MuiRegistry';
import { PageContainer, MainContent } from './layout.styles';
import { Header } from '@components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MuiRegistry>
            <PageContainer>
              <Header />
              <MainContent>{children}</MainContent>
            </PageContainer>
          </MuiRegistry>
        </AppProvider>
      </body>
    </html>
  );
}
