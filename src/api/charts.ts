import { Mutation } from './core'
import { Methods } from '../utils/types/response.type'

const getActivityByDay = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/activities-per-day', body })

const getProgressByPhase = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/progress-by-phase' })

const getPhaseById = () =>
    Mutation({ method: Methods.post, url: 'charts/phase-by-id' })

const gteStepsByPhase = () =>
    Mutation({ method: Methods.post, url: 'charts/steps-by-phase' })

export default {
    getActivityByDay,
    getProgressByPhase,
    getPhaseById,
    gteStepsByPhase,
}
