import { WrapperHeading } from './heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  $color?: 'white' | 'black'
  $lineLeft?: boolean
  $lineBottom?: boolean
}

const Heading = ({
  children,
  $color = 'white',
  $lineLeft = false,
  $lineBottom = false
}: HeadingProps) => (
  <WrapperHeading
    $color={$color}
    $lineLeft={$lineLeft}
    $lineBottom={$lineBottom}
  >
    {children}
  </WrapperHeading>
)

export default Heading
