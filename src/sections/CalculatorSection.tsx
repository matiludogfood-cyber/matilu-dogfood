import { useState } from 'react';
import { Calculator, Dog, Scale, Stethoscope, AlertTriangle, Save, Share2, Info, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useCartStore } from '@/store/cartStore';
import type { DogProfile } from '@/types';

interface CalculatorSectionProps {
  onSectionChange: (section: string) => void;
}

export function CalculatorSection({ onSectionChange }: CalculatorSectionProps) {
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'perro' as 'perro' | 'gato',
    weight: '',
    age: 'adulto' as 'cachorro' | 'adulto' | 'senior',
    breed: '',
    isNeutered: false,
    activityLevel: 'medio' as 'bajo' | 'medio' | 'alto',
    hasAllergy: false,
    allergy: '',
    needsPrescription: false,
  });

  const [result, setResult] = useState<{
    dailyRation: number;
    perMeal: number;
    mealsPerDay: number;
    percentage: number;
    recommendation: string;
    warning?: string;
  } | null>(null);

  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState<DogProfile[]>([]);
  const addDogProfile = useCartStore((state) => state.addDogProfile);

  const calculateRation = () => {
    const weight = parseFloat(formData.weight);
    if (!weight || weight <= 0) return;

    let percentage = 0.03; // Default 3% for adult maintenance
    let mealsPerDay = 2;
    let recommendation = '';
    let warning = '';

    // Calculate based on age and status
    switch (formData.age) {
      case 'cachorro':
        percentage = 0.08;
        mealsPerDay = 3;
        recommendation = 'Tu cachorro está en crecimiento y necesita más nutrientes. Dividir en 3 comidas al día.';
        break;
      case 'senior':
        percentage = 0.025;
        mealsPerDay = 2;
        recommendation = 'Perros senior necesitan menos calorías. Monitorear el peso regularmente.';
        break;
      case 'adulto':
      default:
        if (formData.activityLevel === 'alto') {
          percentage = 0.045;
          recommendation = 'Perro de alta actividad. Aumentar la ración según el ejercicio diario.';
        } else if (formData.activityLevel === 'bajo') {
          percentage = 0.025;
          recommendation = 'Perro de baja actividad. Reducir ración para evitar sobrepeso.';
        } else {
          percentage = 0.03;
          recommendation = 'Ración estándar para perro adulto en mantenimiento.';
        }
        break;
    }

    // Adjust for neutered dogs
    if (formData.isNeutered && formData.age === 'adulto') {
      percentage *= 0.9;
      recommendation += ' Ajustado por esterilización (metabolismo más lento).';
    }

    // Check for extreme weights
    if (weight < 1) {
      warning = 'El peso parece muy bajo. Verifica que sea correcto.';
    } else if (weight > 80) {
      warning = 'El peso parece muy alto. Verifica que sea correcto.';
    }

    // Medical warnings
    if (formData.hasAllergy) {
      warning = '⚠️ Los perros con alergias requieren supervisión veterinaria especializada.';
    }
    if (formData.needsPrescription) {
      warning = '⚠️ Las dietas prescriptas deben ser indicadas por un veterinario.';
    }

    const dailyRation = Math.round(weight * percentage * 1000);
    const perMeal = Math.round(dailyRation / mealsPerDay);

    setResult({
      dailyRation,
      perMeal,
      mealsPerDay,
      percentage: percentage * 100,
      recommendation,
      warning,
    });
  };

  const handleSaveProfile = () => {
    if (!result || !formData.petName) return;

    const profile: DogProfile = {
      id: Date.now().toString(),
      name: formData.petName,
      weight: parseFloat(formData.weight),
      age: formData.age,
      size: getSizeFromWeight(parseFloat(formData.weight)),
      status: getStatusFromForm(),
      hasDisease: formData.hasAllergy,
      disease: formData.allergy,
      activityLevel: formData.activityLevel,
      isNeutered: formData.isNeutered,
      dailyRation: result.dailyRation,
    };

    addDogProfile(profile);
    setSavedProfiles([...savedProfiles, profile]);
    setShowSaveDialog(false);
  };

  const getSizeFromWeight = (weight: number): DogProfile['size'] => {
    if (weight < 5) return 'mini';
    if (weight < 10) return 'pequeno';
    if (weight < 25) return 'mediano';
    if (weight < 45) return 'grande';
    return 'gigante';
  };

  const getStatusFromForm = (): DogProfile['status'] => {
    if (formData.age === 'cachorro') return 'crecimiento';
    if (formData.activityLevel === 'alto') return 'trabajo';
    return 'mantenimiento';
  };

  const shareOnWhatsApp = () => {
    if (!result) return;
    const text = `¡Hola! Calculé la ración de ${formData.petName} con Matilú:\n\n` +
      `📊 Resultados:\n` +
      `• Ración diaria: ${result.dailyRation}g\n` +
      `• Por comida: ${result.perMeal}g (${result.mealsPerDay} comidas)\n` +
      `• Porcentaje: ${result.percentage.toFixed(1)}% del peso\n\n` +
      `🐕 ${formData.petName}: ${formData.weight}kg, ${formData.age}`;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const visualComparisons = [
    { amount: 100, label: 'taza de café' },
    { amount: 250, label: 'taza grande' },
    { amount: 500, label: 'bowl mediano' },
  ];

  const getVisualComparison = (grams: number) => {
    const comparison = visualComparisons.find(c => grams <= c.amount * 1.5);
    if (comparison) {
      const cups = Math.round((grams / comparison.amount) * 10) / 10;
      return `~${cups} ${comparison.label}${cups > 1 ? 's' : ''}`;
    }
    return `${Math.round(grams / 250)} tazas grandes`;
  };

  return (
    <section className="section-matilu bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5" />
            <span className="font-medium">Herramienta gratuita</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            🐕 Calculadora de Ración Diaria
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cuánta comida natural necesita tu perro al día. 
            Ingresa los datos y te daremos una recomendación personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#002B5C] mb-6 flex items-center gap-2">
              <Dog className="w-6 h-6 text-[#007bff]" />
              Datos de tu mascota
            </h3>

            <div className="space-y-5">
              {/* Pet Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🐕 Nombre del perro
                </label>
                <input
                  type="text"
                  value={formData.petName}
                  onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                  placeholder="Ej: Firulais"
                  className="input-matilu"
                />
              </div>

              {/* Pet Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🐱🐕 Tipo de mascota
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['perro', 'gato'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, petType: type })}
                      className={`py-3 px-4 rounded-xl border-2 font-medium capitalize transition-all ${
                        formData.petType === type
                          ? 'border-[#002B5C] bg-[#002B5C] text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type === 'perro' ? '🐕 Perro' : '🐱 Gato'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ⚖️ Peso actual (kg)
                </label>
                <div className="relative">
                  <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    max="100"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="Ej: 12.5"
                    className="input-matilu pl-12"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">kg</span>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🎂 Edad
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'cachorro', label: 'Cachorro', sub: '0-12 meses', emoji: '🐶' },
                    { value: 'adulto', label: 'Adulto', sub: '1-7 años', emoji: '🐕' },
                    { value: 'senior', label: 'Senior', sub: '+7 años', emoji: '🦮' },
                  ].map((age) => (
                    <button
                      key={age.value}
                      onClick={() => setFormData({ ...formData, age: age.value as any })}
                      className={`py-3 px-2 rounded-xl border-2 text-center transition-all ${
                        formData.age === age.value
                          ? 'border-[#002B5C] bg-[#002B5C] text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-2xl mb-1 block">{age.emoji}</span>
                      <span className="text-sm font-medium block">{age.label}</span>
                      <span className="text-xs opacity-70">{age.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Breed */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🏷️ Raza (opcional)
                </label>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  placeholder="Ej: Labrador, Mestizo, etc."
                  className="input-matilu"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🏃 Nivel de actividad
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'bajo', label: 'Bajo', desc: 'Paseos cortos', emoji: '😴' },
                    { value: 'medio', label: 'Medio', desc: 'Paseos diarios', emoji: '🚶' },
                    { value: 'alto', label: 'Alto', desc: 'Mucho ejercicio', emoji: '🏃' },
                  ].map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setFormData({ ...formData, activityLevel: level.value as any })}
                      className={`py-3 px-2 rounded-xl border-2 text-center transition-all ${
                        formData.activityLevel === level.value
                          ? 'border-[#002B5C] bg-[#002B5C] text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xl mb-1 block">{level.emoji}</span>
                      <span className="text-sm font-medium block">{level.label}</span>
                      <span className="text-xs opacity-70">{level.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Neutered */}
              <div>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.isNeutered}
                    onChange={(e) => setFormData({ ...formData, isNeutered: e.target.checked })}
                    className="w-5 h-5 text-[#002B5C] rounded"
                  />
                  <span className="text-sm">✂️ ¿Está castrado/esterilizado?</span>
                </label>
              </div>

              {/* Allergies */}
              <div>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.hasAllergy}
                    onChange={(e) => setFormData({ ...formData, hasAllergy: e.target.checked })}
                    className="w-5 h-5 text-[#002B5C] rounded"
                  />
                  <span className="text-sm">⚠️ ¿Tiene alergias o intolerancias?</span>
                </label>
                {formData.hasAllergy && (
                  <input
                    type="text"
                    value={formData.allergy}
                    onChange={(e) => setFormData({ ...formData, allergy: e.target.value })}
                    placeholder="Especifica cuáles (ej: pollo, trigo)"
                    className="input-matilu mt-2"
                  />
                )}
              </div>

              {/* Prescription Diet */}
              <div>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.needsPrescription}
                    onChange={(e) => setFormData({ ...formData, needsPrescription: e.target.checked })}
                    className="w-5 h-5 text-[#002B5C] rounded"
                  />
                  <span className="text-sm">💊 ¿Requiere dieta prescripta?</span>
                </label>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateRation}
                disabled={!formData.weight || !formData.petName}
                className="w-full btn-matilu-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calculator className="w-5 h-5" />
                Calcular ración diaria
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result ? (
              <>
                {/* Main Result Card */}
                <div className="calculator-result">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Dog className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white/80 text-sm">Ración diaria para</h3>
                      <p className="text-white text-xl font-bold">{formData.petName}</p>
                    </div>
                  </div>

                  <div className="text-center py-6">
                    <span className="text-6xl font-bold text-white">{result.dailyRation}</span>
                    <span className="text-2xl text-white/80 ml-2">gramos/día</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-white/70 text-sm">Por comida</p>
                      <p className="text-2xl font-bold text-white">{result.perMeal}g</p>
                      <p className="text-white/60 text-xs">{result.mealsPerDay} comidas al día</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 text-center">
                      <p className="text-white/70 text-sm">Porcentaje</p>
                      <p className="text-2xl font-bold text-white">{result.percentage.toFixed(1)}%</p>
                      <p className="text-white/60 text-xs">del peso corporal</p>
                    </div>
                  </div>
                </div>

                {/* Visual Comparison */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-semibold text-[#002B5C] mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Comparación visual
                  </h4>
                  <p className="text-gray-600">
                    La ración diaria de <strong>{result.dailyRation}g</strong> es equivalente aproximadamente a:
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-3xl">☕</span>
                    </div>
                    <p className="text-lg font-medium text-[#002B5C]">
                      {getVisualComparison(result.dailyRation)}
                    </p>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-[#002B5C] mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#007bff]" />
                    Recomendación
                  </h4>
                  <p className="text-gray-600 text-sm">{result.recommendation}</p>
                </div>

                {/* Warning */}
                {result.warning && (
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-800 text-sm">{result.warning}</p>
                    </div>
                  </div>
                )}

                {/* Medical Disclaimer */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 text-sm font-medium mb-1">
                        Importante
                      </p>
                      <p className="text-red-700 text-xs">
                        Consulta siempre con tu veterinario antes de cambiar la alimentación. 
                        Esta calculadora es una guía orientativa y no reemplaza el consejo profesional.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setShowSaveDialog(true)}
                    className="btn-matilu-primary flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    Guardar perfil
                  </button>
                  <button
                    onClick={shareOnWhatsApp}
                    className="btn-matilu-secondary flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Compartir
                  </button>
                </div>

                {/* CTA to Products */}
                <div className="bg-gradient-to-r from-[#002B5C] to-[#004a9e] rounded-2xl p-6 text-center">
                  <p className="text-white/80 text-sm mb-3">
                    ¿Listo para empezar a alimentar a {formData.petName} con Matilú?
                  </p>
                  <button
                    onClick={() => onSectionChange('catalogo')}
                    className="bg-white text-[#002B5C] px-6 py-3 rounded-xl font-semibold hover:bg-[#00c8ff] hover:text-white transition-colors"
                  >
                    Ver productos recomendados
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-3xl shadow-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Calculator className="w-12 h-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                  Completa el formulario
                </h3>
                <p className="text-gray-500 max-w-xs">
                  Ingresa los datos de tu perro y te daremos una recomendación personalizada de ración diaria.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#002B5C] text-center mb-8">
            Preguntas frecuentes sobre alimentación
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: '¿Cuántas veces al día debe comer mi perro?',
                a: 'Cachorros: 3-4 veces al día. Adultos: 2 veces al día. Seniors: 2 veces al día con porciones más pequeñas.',
              },
              {
                q: '¿Puedo mezclar comida natural con balanceado?',
                a: 'Sí, pero gradualmente. Te recomendamos consultar con un veterinario para una transición adecuada.',
              },
              {
                q: '¿Cómo conservar la comida Matilú?',
                a: 'Refrigerar hasta 5 días o congelar hasta 3 meses. Descongelar en heladera, no a temperatura ambiente.',
              },
              {
                q: '¿Es apta para perros con alergias?',
                a: 'Ofrecemos opciones hipoalergénicas. Consultanos sobre las proteínas disponibles.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#002B5C] mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Profile Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#002B5C]">
              Guardar perfil de {formData.petName}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-600 mb-4">
              Se guardará el perfil con los siguientes datos:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <p><strong>Nombre:</strong> {formData.petName}</p>
              <p><strong>Peso:</strong> {formData.weight} kg</p>
              <p><strong>Edad:</strong> {formData.age}</p>
              <p><strong>Ración diaria:</strong> {result?.dailyRation}g</p>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveProfile}
                className="flex-1 btn-matilu-primary"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowSaveDialog(false)}
                className="flex-1 btn-matilu-outline"
              >
                Cancelar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
