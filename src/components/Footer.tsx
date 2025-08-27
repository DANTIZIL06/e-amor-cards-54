import { Facebook, Instagram, MessageCircle, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary/5 border-t border-border/50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Domus</h3>
            <p className="text-muted-foreground">
              Fortalecendo famílias através da palavra de Deus e do amor materno.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-2">
              <a href="mailto:contatodomus2025@outllok.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contatodomus2025@outllok.com
              </a>
              <a href="https://wa.me/553183479083" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/domus_bra?igsh=ODViZXg4Y2ppMGJx" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/19PsGkCedv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> para famílias que amam a Deus
          </p>
          <p className="text-sm text-muted-foreground mt-2">© 2024 Domus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;