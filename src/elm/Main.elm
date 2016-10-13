import Html exposing (..)
import Html.Attributes exposing (..)
import Html.App exposing (beginnerProgram)
import Html.Events exposing (onClick)

-- Model
type alias Model = Int
model : Model 
model = 
    0

-- Update
type Action = Increment | Decrement | Reset
update : Action -> Model -> Model
update action model =
    case action of
        Increment ->
            model + 1
        Decrement ->
            model - 1
        Reset ->
            0

-- View
view : Model -> Html Action
view model =
    div [class "container"] [
        button [class "btn btn-primary", onClick Increment] [text "+"]
    ,   h1 [] [text (toString model)]
    ,   button [class "btn btn-primary",onClick Decrement] [text "-"]
    ,   button [class "btn btn-alert",onClick Reset] [text "Reset"]
    ]



main =
    beginnerProgram {model = model, view = view, update = update}