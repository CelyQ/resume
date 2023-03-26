import { frontendTechnologies } from '@/src/data/technologies/frontend'
import { Row } from './Row'

export function Frontend() {
  return <Row technologies={frontendTechnologies} />
}
