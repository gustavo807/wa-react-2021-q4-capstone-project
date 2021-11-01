import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import usePagination, { DOTS } from "../../hooks/usePagination";
import { Wrapper, Link } from "./styled";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Wrapper>
      <Link
        className={classnames({
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        &laquo;
      </Link>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <Link className="dots">&#8230;</Link>;
        }

        return (
          <Link
            key={pageNumber}
            className={classnames({
              active: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Link>
        );
      })}

      <Link
        className={classnames({
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        &raquo;
      </Link>
    </Wrapper>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  siblingCount: 1,
};

export default Pagination;
