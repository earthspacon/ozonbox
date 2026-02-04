import { IconPhone, IconTelegram } from '@/shared/ui/icons'

export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="https://t.me/Ozonoxy01"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact__btn floating-contact__btn--telegram"
        aria-label="Telegram"
      >
        <IconTelegram />
      </a>
      <a href="tel:+998942909977" className="floating-contact__btn floating-contact__btn--phone" aria-label="Позвонить">
        <IconPhone fill="#fff" />
      </a>
    </div>
  )
}
