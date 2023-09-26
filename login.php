<?php

    require_once "connect.php";

    $polacz = @new mysqli($host, $db_user, $db_pass, $db_name);

    if($polacz->connect_errno!=0)
    {
        echo "Blad: ".$polacz->connect_errno;
    }
    else
    {
        $login = $_POST['login'];
        $haslo = $_POST['haslo'];

        $sql= "SELECT * FROM uzytkownicy WHERE user='$login' AND pass='$haslo'";

        if($rezultat = @$polacz->query($sql))
        {
            $liczba_user = $rezultat->num_rows;
            if($liczba_user>0)
            {

                $wiersz = $rezultat->fetch_assoc();
                $user = $wiersz['user'];

                $rezultat->free_result();
                header('Location: console.php');

            } else {

                header('Location: index.php');

            }
        }

        $polacz->close();
    }
?>
