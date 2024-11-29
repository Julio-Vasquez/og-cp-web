import { Mutation } from './core'
import { Methods } from '../utils/types/response.type'

const getActivityPerDay = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/activities-per-day', body })

const getProgressByPhase = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/progress-by-phase', body })

const getPhaseById = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/phase-by-id', body })

const getStepsByPhase = (body: String) =>
    Mutation({ method: Methods.post, url: 'charts/steps-by-phase', body })

export default {
    getActivityPerDay,
    getProgressByPhase,
    getPhaseById,
    getStepsByPhase,
}
