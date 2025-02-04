import '@emotion/react/jsx-dev-runtime'
import '@testing-library/jest-dom'
import {createSerializer} from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer())
