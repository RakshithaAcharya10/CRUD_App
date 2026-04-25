import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewBooking() {
  const [booking, setBooking] = useState([])
  const [selectedbooking, setSelectedbooking] = useState(null)
  const [status, setStatus] = useState("")
  const [open, setOpen] = useState(false)


  const fetchbooking = () => {
    axios.get("http://localhost:7000/booking/getAllbooking")
      .then((res) => {
        console.log(res.data.bdata)
        setBooking(res.data.bdata)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchbooking()
  }, [])

  const handlechangestatus = (booking, status) => {
    setSelectedbooking(booking)
    setStatus(status)
    setOpen(true)

  }

  const handleconfirm = async () => {
    try {
      await axios.put(`http://localhost:7000/booking/updateStatus/${selectedbooking._id}`, { newstatus: status })
      fetchbooking()
      setStatus(status)
      setOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL.NO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>ADDRESS</TableCell>
              <TableCell>PRODUCT</TableCell>
              <TableCell>BOOKING STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booking.map((b, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{b.fullname}</TableCell>
                <TableCell>{b.address}</TableCell>
                <TableCell>{b.productID?.pname}</TableCell>
                <TableCell>{b.bookingstatus}</TableCell>
                <TableCell>
                  <Select value={b.bookingstatus} onChange={(e) => handlechangestatus(b, e.target.value)}>
                    <MenuItem value="Pending">PENDING</MenuItem>
                    <MenuItem value="Approved">APPROVED</MenuItem>
                    <MenuItem value="Rejected">REJECTED</MenuItem>
                    <MenuItem value="Completed">COMPLETED</MenuItem>
                  </Select>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm status update</DialogTitle>
        <DialogContent>Are you sure want to change the status to {status}</DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant='contained' color='success' onClick={handleconfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
