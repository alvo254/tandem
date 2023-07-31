import React from 'react'
import { Navbar, Button, Link, Text,  } from "@nextui-org/react";
// import { Layout } from "./Layout.js";


const Nav = () => {
    const collapseItems = [
        "Home",
        "About Us",
        "Services",
        "Contacts",

      ];
  return (
    <div>
        <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            T
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link  href="#">
            About Us
          </Navbar.Link>
          <Navbar.Link href="#">services</Navbar.Link>
          <Navbar.Link href="#">Contacts</Navbar.Link>
        </Navbar.Content>
        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Nav
