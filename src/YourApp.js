import tw from "twin.macro"

export default function YourApp() {
  return (
    <>
      {/* <HTML /> */}
      {/* <SizeAndShape /> */}
      {/* <Colors /> */}
      {/* <MarginPadding /> */}
      {/* <Flex /> */}
      {/* <Grid /> */}
      {/* <Hover /> */}
      {/* <MediaQueries /> */}
    </>
  )
}

//* --------- HTML --------- *//

const HTML = () => {
  //* This is an example of 'all' the HTML elements you can use in React
  //* Now as we continue these are the building blocks that you will
  //* use to build your components.

  return (
    <>
      <h1>This is a h1</h1>
      <h2>This is a h2</h2>
      <h3>This is a h3</h3>
      <h4>This is a h4</h4>
      <h5>This is a h5</h5>
      <h6>This is a h6</h6>
      <p>This is a paragraph (p)</p>
      <div>
        This is a Div, commonly used as a container to position or layout other
        div/p/h/img/input/button within them.
      </div>
      <span>
        This is a span, commonly used to style text within a paragraph.
      </span>
      <ul>
        {/* [U]nordered [L]ist */}
        <li>- This is a list item</li>
        <li>- This is a list item</li>
        <li>- This is a list item</li>
      </ul>
      <ol>
        {/* [O]rdered [L]ist */}
        <li>1. This is a list item</li>
        <li>2. This is a list item</li>
        <li>3. This is a list item</li>
      </ol>
      <button>This is a button</button>
      <label htmlFor="input_name">This goes with the input</label>
      <input name="input_name" type="text" placeholder="This is an input" />
      <img src="https://picsum.photos/200" alt="200" />

      {/* The following are just divs that have different names so that screen readers can navigate the website */}
      <header>
        This is a header
        <nav>This is a nav</nav>
      </header>

      <main>
        This is a main
        <section>This is a section</section>
        <article>This is an article</article>
        <aside>This is an aside</aside>
      </main>

      <footer>This is a footer</footer>
    </>
  )
}

//* --------- Size and Shape --------- *//

const SizeAndShape = () => {
  //* Now we can begin to use tw to style our our tool kit of HTML elements
  //* Here is a link to all of tailwinds sizing and shape https://tailwindcss.com/docs/width
  //* On tailwind docs, on the left side there is height and other sizing tools besides width
  return (
    <>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </>
  )
}
// This is some width and height (with a color so you can see it
// by default elements are transparent). We will start with size by
// doing w-[size as a fixed number] but we can also do w-[%]/h-[%] which is a percentage of the parent container.
// We can also do w-[vw]/h-[vh] which is a percentage of the screen's height/width (know as viewport)
// We can also do w-[max/min]-[size] which is the max or min size of the element
// We will get more into this as we move on
// Try changing the size using differnet widths and heights
const Box1 = tw.div`w-96 h-96 bg-green-500`
const Box2 = tw.div`w-64 h-64 bg-yellow-500`
const Box3 = tw.div`w-44 h-44 bg-blue-500`
const Box4 = tw.div`w-32 h-32 bg-red-500`

//* --------- Colors --------- *//

const Colors = () => {
  //* Color can be applied to the background, border, text, gradient, and shadow
  //* Here are all of tailwinds colors https://tailwindcss.com/docs/customizing-colors
  return (
    <>
      <Background></Background>
      <Border></Border>
      <Text>This is some Text that is RED</Text>
      <Gradient></Gradient>
      <Shadow></Shadow>
    </>
  )
}

// This is using bg-[color]-[deepness]/[opacity] to set the background color and opacity
// Deepness is a number from 50 then 100 to 900 (100 at a time) and opacity is a number from 0 to 100
const Background = tw.div`bg-red-500/70 w-96 h-96`
// This is using border-[size] border-[color]-[deepness] to set the border size and color
const Border = tw.div`bg-green-500 border-2 border-red-500 w-96 h-96`
// This is using text-[color]-[deepness] to set the text color
const Text = tw.div`text-red-500`
// This is using bg-gradient-to-[direction] from-[color]-[deepness] to-[color]-[deepness] to set the gradient
const Gradient = tw.div`bg-gradient-to-r from-red-500 to-blue-500 w-96 h-96`
// This is using shadow-[size] to set the shadow (bonus style - I put on rounded corners)
const Shadow = tw.div`bg-white shadow-2xl rounded-2xl w-96 h-96`

//* --------- Margin and Padding --------- *//

const MarginPadding = () => {
  //* Margin is around the outside of the element
  //* Padding is around the inside of the element
  //* Here is a link to all of tailwinds margin and padding https://tailwindcss.com/docs/margin
  //* Padding is also in the same link in the left menu

  return (
    <>
      <Margin>This is a p with margin all around it</Margin>
      <Padding>This is a p with padding all around it</Padding>

      <MarginTop>This is a p with margin at the top only</MarginTop>
      <MarginBottom>This is a p with margin at the bottom only</MarginBottom>

      <MarginLeft>This is a p with margin at the left only</MarginLeft>
      <MarginRight>This is a p with margin at the right only</MarginRight>

      <PaddingX>This is a p with horizontal padding only</PaddingX>
      <PaddingY>This is a p with vertical padding only</PaddingY>
    </>
  )
}

// Margin and Padding can be applied to all sides, top, right, bottom, left, and x and y axis

// ml = margin left mr = margin right mt = margin top mb = margin bottom mx = margin x axis my = margin y axis
// pl = padding left pr = padding right pt = padding top pb = padding bottom px = padding x axis py = padding y axis
const Margin = tw.p`w-1/3 m-8 bg-green-200`
const Padding = tw.p`w-1/3 p-4 bg-yellow-200`
// Margin and Padding can be applied to all sides, top, right, bottom, left [m | p][t | r | b | l]
const MarginBottom = tw.p`w-32 mb-4 bg-blue-200`
const MarginTop = tw.p`w-32 mt-4 bg-red-200`
const MarginLeft = tw.p`ml-4 bg-indigo-200`
const MarginRight = tw.p`mr-4 bg-purple-200`
// Both Margin and Padding can be applied to the x and y axis [mx | my | px | py]
const PaddingX = tw.p`px-4 bg-pink-200`
const PaddingY = tw.p`py-4 bg-gray-200`

//* --------- Flexbox --------- *//

const Flex = () => {
  return (
    <>
      <Container>
        <Box5 />
        <Box6 />
        <Box7 />
      </Container>
    </>
  )
}

//This component shows how to use flexbox to position elements
//Flexbox can be used with the flex property and its many sub-properties
//The most common sub-properties are flex-direction, justify-content, align-items, align-content, flex-wrap, and order

//Container is a flex container that uses the flex property to create a flexbox layout
//justify-[start | center | end] aligns items along the main axis (horizontally)
//items-[start | center | end] aligns items along the cross axis (vertically)
//flex-wrap allows the items to wrap onto multiple lines
//flex-col determines the direction of the main axis (flex-row is default)
//Try them on container and see what happens
const Container = tw.div`flex justify-center items-center h-screen w-full`
const Box5 = tw.div`bg-red-500 w-24 h-24`
const Box6 = tw.div`bg-blue-500 w-24 h-24`
const Box7 = tw.div`bg-green-500 w-24 h-24`

const Grid = () => {
  return (
    <>
      <GridContainer>
        {[...Array(12)].map(_ => (
          <GridBox />
        ))}
      </GridContainer>
    </>
  )
}

//This component shows how to use CSS Grid to create a grid layout
//CSS Grid can be used with the display: grid property and its many sub-properties
//The most common sub-properties are grid-template-columns, grid-template-rows, grid-template-areas, and grid-gap

//GridContainer is a grid container that uses the display: grid property to create a grid layout
//grid-[cols | rows]-[number] determines the number and size of rows/columns
//gap defines the size of the gap between grid items
//Try them on container and see what happens
const GridContainer = tw.div`grid grid-cols-3 grid-rows-3 gap-4`
const GridBox = tw.div`bg-red-500 w-full h-24`

const Hover = () => {
  return (
    <Wrap>
      <HoverBox>This box changes color on hover</HoverBox>
    </Wrap>
  )
}

const Wrap = tw.div`flex justify-center items-center h-screen w-full`
//This component shows how to use the hover state to change the style of an element
//The hover state can be used with the hover selector and any CSS property
//The transition property specifies the duration and timing function for a transition effect (+ ease-in-out because it looks cool)
const HoverBox = tw.div`bg-red-500 hover:(bg-blue-500 shadow-2xl) w-24 h-24 transition duration-500 ease-in-out`

const MediaQueries = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Media Queries</Title>
      </Header>
      <Main>
        <MainText>This is a paragraph with a max-width</MainText>
      </Main>
      <Footer>
        <Button>Click Me</Button>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = tw.div`w-full h-screen flex flex-col items-center justify-center`
const Header = tw.header`w-full h-32 flex items-center justify-center bg-gray-800 sm:bg-red-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500`
const Title = tw.h1`text-2xl sm:text-3xl  lg:text-5xl xl:text-6xl mb-20 font-bold text-center my-8`
const MainText = tw.p`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center max-w-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20`
const Button = tw.button`px-4 py-2 bg-blue-500 hover:(bg-blue-600 shadow-lg) text-white rounded transition-colors duration-300 ease-in-out
 focus:(outline-none ring-2 ring-blue-400 ring-offset-2) sm:(px-6 py-3 text-lg) md:(px-8 py-4 text-xl) lg:(px-10 py-5 text-2xl) xl:(px-12 py-6 text-3xl)`
const Main = tw.main`w-full flex-1 flex items-center justify-center text-lg sm:(text-2xl) md:(text-3xl) lg:(text-4xl) xl:(text-5xl)`
const Footer = tw.footer`w-full h-16 flex items-center justify-center bg-gray-800 sm:(bg-red-500) md:(bg-yellow-500) lg:(bg-green-500) xl:(bg-blue-500)`
