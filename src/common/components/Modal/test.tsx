import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'

describe('<Modal />', () => {
  it('should render a modal component', () => {
    render(<Modal openModal title="Modal title" />)
    expect(screen.getByText('Modal title')).toBeInTheDocument()
  })

  it('should call onCloseModal function on close button click', async () => {
    const spy = jest.fn()
    render(<Modal openModal onCloseModal={spy} />)
    userEvent.click(screen.getByTestId('closeModal'))
    expect(spy).toHaveBeenCalled()
  })

  it('should be possible to render body content', () => {
    render(
      <Modal openModal>
        <p>content body</p>
      </Modal>,
    )
    expect(screen.getByText('content body')).toBeInTheDocument()
  })
})
