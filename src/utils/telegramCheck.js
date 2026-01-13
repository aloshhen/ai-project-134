export const isTelegramMiniApp = () => {
  return typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp;
}