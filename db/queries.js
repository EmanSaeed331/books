exports.queryList = {
    GET_STORE_LIST_QUERY:'SELECT STORE_ID, STORE_NAME, STORE_CODE FROM BMS.STORE',
    SAVE_STORE_QUERY : 'INSERT INTO BMS.STORE (STORE_NAME, STORE_CODE, ADDRESS , CREATED_BY , CREATED_ON) VALUES($1, $2, $3, $4, $5)',
    GET_BOOK_LIST_QUERY :'SELECT BOOK_ID, BOOK_TITLE, BOOK_AUTHER, BOOK_PUBLISHER FROM BMS.BOOK',
    GET_BOOK_DETAILS_QUERY:`SELECT BOOK_ID, BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHER, BOOK_PUBLISHER, BOOK_PAGES, BOOK.STORE_CODE , STORE.STORE_NAME ,STORE.ADDRESS FROM BMS.BOOK
    INNER JOIN BMS.STORE ON BOOK.STORE_CODE = STORE.STORE_CODE 
    WHERE BOOK_ID =$1 `,
    SAVE_BOOK_QUERY:`
    INSERT INTO BMS.BOOK
    (BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHER, BOOK_PUBLISHER, BOOK_PAGES, STORE_CODE, CREATED_ON, CREATED_BY)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    `,


}
