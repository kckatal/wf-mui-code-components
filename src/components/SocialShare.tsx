import React from "react"
import ShareIcon from '@mui/icons-material/Share';
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import { alpha } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Popper from "@mui/material/Popper"
import Fade from "@mui/material/Fade"
import Paper from "@mui/material/Paper"
import FacebookIcon from "@mui/icons-material/Facebook"
import XIcon from '@mui/icons-material/X';
import RedditIcon from "@mui/icons-material/Reddit"
import LinkIcon from "@mui/icons-material/Link"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { EmotionCacheShadowDomProvider } from "@webflow/emotion-utils";


export const DropdownShareButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const togglePopper = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(prev => (prev ? null : event.currentTarget))
  }

  const isOpen = Boolean(anchorEl)

  const openLink = (socialLink: string) => {
    window.open(socialLink, "_blank")
  }

  const handleShare = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const ahref = window.location.href
    const encodedAhref = encodeURIComponent(ahref)
    let link: string | undefined

    switch ((e.currentTarget as HTMLElement).id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${encodedAhref}`
        openLink(link)
        break
      case "linkedin":
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedAhref}`
        openLink(link)
        break
      case "X":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`
        openLink(link)
        break
      case "reddit":
        link = `https://www.reddit.com/submit?url=${encodedAhref}`
        openLink(link)
        break
      case "copy":
        navigator.clipboard.writeText(ahref)
        break
      default:
        break
    }

    setAnchorEl(null)
  }

  return (
    <div>
    <EmotionCacheShadowDomProvider>
      <Button
        onClick={togglePopper}
        color="inherit"
        sx={{
          backgroundColor: "primary.main",
          color: "rgba(255,255,255,0.9)",
          fontWeight: 500,
          "&:hover": { backgroundColor: alpha("#26a27b", 0.9085) }
        }}
      >
        <ShareIcon />
        Share Article
      </Button>
    </EmotionCacheShadowDomProvider>
      <Popper open={isOpen} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <List dense={true}>
                <ListItem disablePadding>
                  <ListItemButton id="facebook" onClick={handleShare}>
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton id="linkedin" onClick={handleShare}>
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton id="X" onClick={handleShare}>
                    <ListItemIcon>
                      <XIcon />
                    </ListItemIcon>
                    <ListItemText primary="X" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton id="reddit" onClick={handleShare}>
                    <ListItemIcon>
                      <RedditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reddit" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton id="copy" onClick={handleShare}>
                    <ListItemIcon>
                      <LinkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Copy Link" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>

    </div>
  )
}