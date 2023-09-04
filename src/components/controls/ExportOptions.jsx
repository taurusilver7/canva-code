import React from 'react'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Share2Icon } from '@radix-ui/react-icons'

function ExportOptions({targetRef}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <Button>
            <Share2Icon className="mr-2" />
            Export
         </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default ExportOptions