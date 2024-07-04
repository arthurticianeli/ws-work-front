import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should has a tooltip on the info icon', () => {
    render(
      <div data-testid="tooltip-icon">
        <Tooltip data-testid="tooltip-text" title="Tooltip text">
          <IoMdInformationCircleOutline />
        </Tooltip>
      </div>,
    )
    const infoIcon = screen.getByTestId('tooltip-icon')
    userEvent.hover(infoIcon)

    const infoTooltip = screen.getByTestId('tooltip-text')
    expect(infoTooltip.title).toEqual('Tooltip text')
  })
})
