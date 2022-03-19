let alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26 ];

function randomizer ( arr )
{
    let rnd = Math.floor( Math.random() * arr.length );
    return arr[ rnd ];
}

function calculator ( callback, ...args )
{
    return {
        string: callback( args[ 0 ] ),
        number: callback( args[ 1 ] )
    }

}

/**
 * @param { number } counter
 */
function collector ( counter )
{
    let result = [];
    for ( let i = 0; i < counter; i++ )
    {
        result.push( calculator( randomizer, alphabet, numbers ) );
    }
    return result;
}

/**
 * @param { function } callback
 * @param { number } counter
 */

function finalize_order ( callback, counter, ...args )
{
    let first_output, str_arr, int_arr, str, num;
    [ num, str ] = [ ...args ]
    first_output = callback( counter );
    str_arr = str.filter( item => Array.from( new Set( first_output.map( obj => obj.string ) ) ).indexOf( item ) === -1 ).reduce( ( a, b ) => a + b )
    int_arr = num.filter( item => Array.from( new Set( first_output.map( obj => obj.number ) ) ).indexOf( item ) === -1 ).reduce( ( a, b ) => a + b )

    return {
        total_output: first_output,
        exceptional_str: str_arr,
        exceptional_int: int_arr
    }



}

let output = finalize_order( collector, 20, numbers, alphabet )


