
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const notifications = [
  "✨ Maria de SP acabou de garantir os seus cards!",
  "🙏 Ana do RJ transformou a rotina da família!",
  "💝 Carla de MG recebeu os cards com sucesso!",
  "⭐ Paula de PR está adorando o material!",
  "🌟 Fernanda de SC recomenda para todas as mães!"
];

const FloatingElements = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  // Sistema de notificações falsas
  useEffect(() => {
    const showNotificationInterval = setInterval(() => {
      setCurrentNotification(Math.floor(Math.random() * notifications.length));
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }, Math.random() * 15000 + 15000); // Entre 15-30 segundos

    return () => clearInterval(showNotificationInterval);
  }, []);

  const scrollToTarget = () => {
    const element = document.getElementById("oferta-final");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Botão CTA Fixo - otimizado para mobile */}
      <Button 
        onClick={scrollToTarget}
        className="btn-floating text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 min-h-[44px]"
        aria-label="Quero agora!"
      >
        <span className="hidden sm:inline">Quero agora!</span>
        <span className="sm:hidden">Quero!</span>
      </Button>


      {/* Notificações de compra - otimizadas para mobile */}
      {showNotification && (
        <div className="notification-popup text-xs sm:text-sm p-2 sm:p-3 max-w-[calc(100vw-2rem)] sm:max-w-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <p className="text-xs sm:text-sm text-musgo font-medium leading-tight">
              {notifications[currentNotification]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingElements;
