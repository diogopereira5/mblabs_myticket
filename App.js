import 'react-native-gesture-handler';
import Router from "./src/routes"
import { createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/events", () => {
      return {
        events: [
          { id: 1, title: "Rock in Rio", locale: "Rio de Janeiro - RJ", description: "Lorem ipsuma description of a product to tes for a buy to item and revi...", image: "https://vejario.abril.com.br/wp-content/uploads/2022/05/Dia04_Mundo_CapitalInicial_ArielMartini_IHF_18.jpg" },
          { id: 2, title: "Rock in Rio", locale: "Rio de Janeiro - RJ", description: "Lorem ipsuma description of a product to tes for a buy to item and revi...", image: "https://vejario.abril.com.br/wp-content/uploads/2022/05/Dia04_Mundo_CapitalInicial_ArielMartini_IHF_18.jpg" },
          { id: 3, title: "Rock in Rio", locale: "Rio de Janeiro - RJ", description: "Lorem ipsuma description of a product to tes for a buy to item and revi...", image: "https://vejario.abril.com.br/wp-content/uploads/2022/05/Dia04_Mundo_CapitalInicial_ArielMartini_IHF_18.jpg" },
        ],
      }
    })
  },
})

export default function App() {
  return (
    <Router />
  );
}
