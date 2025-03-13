import type User from '@/domain/entity/user'
import { reactive } from 'vue'

export const store: { user?: User } = reactive({})
