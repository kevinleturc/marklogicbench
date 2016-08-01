BEGIN{
}
{
	sum[$6] += $6=="QUERY"?;
        N[$6]++
}
END {

}

