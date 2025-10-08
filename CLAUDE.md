# MÉMOIRE PROJET - leprixdelinaction.fr

## RÈGLES SHADCN/UI
**IMPORTANT** : Utiliser EXCLUSIVEMENT les composants Shadcn/UI pour toutes les interfaces.

### Composants disponibles :
- `Card`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`
- `Button`
- `Input`
- `Select`, `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`
- `Slider`
- `Progress`

### Import pattern :
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
```

## DESIGN SYSTEM
- Palette : #1a202c (anthracite), #f7fafc (blanc cassé), #c53030 (rouge urgence), #2f855a (vert gains)
- Typo : Inter (Bold titres, Regular body, Black chiffres)
- Inspirations : Linear.app (hero), Stripe (CTA), Notion (calculateur)
- Ton : Sérieux, scientifique, urgent, comme un audit financier

## STRUCTURE
- Framework : Next.js 14 App Router
- Styling : Tailwind CSS + Shadcn/UI
- Icons : @heroicons/react
- Animation : react-countup
