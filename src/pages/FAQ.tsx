import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué es Matilú y por qué es diferente al alimento de mercado?",
    answer: "Matilú es alimentación natural cocida a baja temperatura, hecha con ingredientes reales que podés reconocer: carne, pollo, verduras y cereales. A diferencia del alimento balanceado tradicional, no usamos harinas de carne, subproductos ni conservantes artificiales. Es comida real, como la que prepararías en casa, pero formulada por especialistas para que sea 100% completa y balanceada."
  },
  {
    question: "¿Cómo funciona la membresía?",
    answer: "Ofrecemos 3 niveles de membresía: Amigo Fiel (básica), Guardián Nutritivo (intermedia) y Huella de Oro (premium). Cada una incluye descuentos en snacks, asesoría nutricional y snacks sorpresa mensuales. La membresía Oro incluye delivery gratis en CABA. Podés elegir entre carne, pollo, cerdo o merluza, y combinarlos como prefieras."
  },
  {
    question: "¿Cuánto dura la comida y cómo se conserva?",
    answer: "La comida Matilfood se entrega congelada en porciones. En el freezer dura hasta 3 meses. Una vez descongelada, durá 5 días en la heladera sin romper el vacío. Una vez abierta, consumila dentro de las 48 horas. Los snacks deshidratados se conservan en alacena y oscuridad."
  },
  {
    question: "¿Cómo hago la transición desde el alimento anterior?",
    answer: "Recomendamos una transición gradual de 7-10 días: empezá con 75% de alimento viejo + 25% Matilú, y aumentá la proporción de Matilú cada 2-3 días. Esto evita cambios bruscos en la digestión de tu perro. Si tu mascota tiene sensibilidad estomacal, podemos asesorarte personalmente por WhatsApp."
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer: "Actualmente realizamos envíos en CABA y Gran Buenos Aires. La membresía Huella de Oro incluye delivery gratis en CABA. Para otras zonas, consultanos por WhatsApp y vemos opciones. También podés retirar personalmente en nuestro punto de Buenos Aires."
  },
  {
    question: "¿Puedo cancelar la membresía cuando quiera?",
    answer: "¡Sí! Las membresías son flexibles. Podés pausar, modificar o cancelar cuando necesites sin penalización. Solo pedimos avisar con 30 días de anticipación para ajustar la producción de tu pedido."
  },
  {
    question: "¿La comida es para perros de todas las razas y edades?",
    answer: "Sí. Tenemos fórmulas para cachorros (0-12 meses), adultos (1-7 años) y senior (+7 años). Nuestra calculadora de ración te ayuda a determinar la cantidad exacta según el peso, edad y nivel de actividad de tu perro. También adaptamos para perros con necesidades especiales."
  },
  {
    question: "¿Qué pasa si mi perro no le gusta la comida?",
    answer: "Ofrecemos garantía de satisfacción. Si tu perro no acepta la comida en los primeros días, contactanos por WhatsApp y te ayudamos a ajustar la transición o te recomendamos otro sabor. Tu perro feliz es nuestra prioridad."
  },
  {
    question: "¿Los snacks son naturales también?",
    answer: "Absolutamente. Todos nuestros snacks (Mini Treats, Gomitas, Tiras, Especialidades) están hechos con un solo ingrediente deshidratado o cocido: hígado, mondongo, pulmón, cuellitos, etc. Sin aditivos, sin colorantes, sin conservantes. 100% natural."
  },
{
    question: "¿Qué beneficios tengo con las membresías de Matilú?",
    answer: "¡Muchos! Todas nuestras membresías incluyen increíbles beneficios para consentir a tu peludo: una torta de cumpleaños individual de regalo, descuentos exclusivos en snacks y pastelería, y acceso gratuito al Plan 1 de Fiel Pet para que tu compañero esté siempre protegido con su seguro médico."
  {
    question: "¿Cómo puedo contactarlos para más información?",
    answer: "Podés escribirnos por WhatsApp al +54 11 5177-4724, enviarnos un email a hola@matiludogfood.com, o completar el formulario de contacto en nuestra web. Respondemos en menos de 24 horas. También estamos en Instagram @matiludogfood."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-gray-600">
            Todo lo que necesitás saber sobre la alimentación natural de Matilú
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">
            ¿Tenés otra duda?
          </h2>
          <p className="mb-6">
            Estamos para ayudarte a elegir la mejor alimentación para tu perro
          </p>
          <a
            href="https://wa.me/541151774724"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}