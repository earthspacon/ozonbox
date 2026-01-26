import { IconPhone, IconTelegram, IconWhatsapp } from '@/shared/ui'

export function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/78001234567"
        className="floating-contact__btn floating-contact__btn--whatsapp"
        aria-label="WhatsApp"
      >
        <IconWhatsapp />
      </a>
      <a
        href="https://t.me/ozontech"
        className="floating-contact__btn floating-contact__btn--telegram"
        aria-label="Telegram"
      >
        <IconTelegram />
      </a>
      <a href="tel:+78001234567" className="floating-contact__btn floating-contact__btn--phone" aria-label="Позвонить">
        <IconPhone />
      </a>
    </div>
  )
}
