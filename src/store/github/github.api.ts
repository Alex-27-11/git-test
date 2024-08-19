// исходя из задания мне показались эти 2 урла самыми подходящими

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReposInterface } from '../../models/models'

export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchRepos: build.query<ReposInterface[], string>({
			query: (search: string) => ({
				url: `/orgs/${search}/repos`,
				// url: `/repositories`,
			}),
		}),
	})
})

export const { useSearchReposQuery } = githubApi