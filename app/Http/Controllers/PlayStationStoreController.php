<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PlaystationStoreApi\Client;
use PlaystationStoreApi\Enum\Region;
use GuzzleHttp\Client as HttpClient;
use PlaystationStoreApi\Query\CatalogProducts;
use PlaystationStoreApi\Enum\Category;
use PlaystationStoreApi\Enum\SortingDirection;
use PlaystationStoreApi\ValueObject\Pagination;
use PlaystationStoreApi\ValueObject\Sorting;
use Inertia\Inertia;
class PlayStationStoreController extends Controller
{
    //
    public function index()
    {
        
        $clientApi = new Client(new Region(Region::INDONESIA_ENGLISH), new HttpClient());
        $sha256Hash = '9845afc0dbaab4965f6563fffc703f588c8e76792000e8610843b8d3ee9c4c09';
        $query = new CatalogProducts(new Category(Category::ALL_DEALS), $sha256Hash);
        $query->setPagination(new Pagination(24, 0));
        $query->setSorting(new Sorting('productReleaseDate', new SortingDirection(SortingDirection::DESC)));
        $response = $clientApi->catalog()->products($query);
        $catalog= response()->json(json_decode($response));
        return Inertia::render('Store', [
            'data' => $catalog->original->data->categoryGridRetrieve,
        ]);
    }
}
