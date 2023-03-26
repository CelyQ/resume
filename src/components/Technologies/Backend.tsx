'use client'

import { backendTechnologies } from '@/src/data/technologies/backend'

import { Row } from './Row'

export function Backend() {
  return <Row technologies={backendTechnologies} />
}
