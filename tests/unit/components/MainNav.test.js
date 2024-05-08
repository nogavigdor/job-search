import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

//making sure the MainNav component renders
describe('MainNav', () => {
  it('renders a MainNav component', () => {
    render(MainNav)
    const appName = screen.getByText('Good Jobs')
    expect(appName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Location',
      'Life at Good Jobs',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})
