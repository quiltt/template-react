import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders learn typescript link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/typescript/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders learn graphql link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/graphql/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders learn apollo link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/apollo/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders learn quiltt link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/quiltt/i)
  expect(linkElement).toBeInTheDocument()
})
