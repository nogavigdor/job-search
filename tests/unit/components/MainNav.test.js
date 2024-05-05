import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

//making sure the MainNav component renders
describe('MainNav', () => {
  it('renders a MainNav component', () => {
    render(MainNav)
    const appName = screen.getByText('Good Jobs')
    expect(appName).toBeInTheDocument()
  })
})
