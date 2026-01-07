import Header from '@/components/Header';
import OrderConfirmation from '@/components/OrderConfirmation';
import OrderSummarySidebar from '@/components/OrderSummarySidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:h-screen md:overflow-hidden lg:h-auto lg:overflow-visible">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row md:h-[calc(100vh-4rem)] lg:h-auto pb-20 md:pb-0">
        <div className="flex-1 md:overflow-y-auto lg:overflow-visible">
          <OrderConfirmation />
        </div>
        <div className="md:sticky md:top-16 md:self-start md:h-[calc(100vh-4rem)] md:overflow-y-auto lg:h-auto lg:overflow-visible">
          <OrderSummarySidebar />
        </div>
      </div>
    </div>
  );
}

