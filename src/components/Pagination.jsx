import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaginationControlled({ total }) {
  const [pageNumber, setPage] = useSearchParams({ pageNumber: 1 });

  const handleChange = (event, value) => {
    setPage({ pageNumber: value });
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="secondary"
        count={total}
        page={pageNumber.pageNumber}
        onChange={handleChange}
      />
    </Stack>
  );
}
