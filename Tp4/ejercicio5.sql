use ejercicio_5;
a)select apellido from empleados;
b)select distinct(apellido) from empleados;
c)select emplaedo_id,cuil_cuit, nombre, apellido, departamento, estado from empleados;
d)select apellido, nombre from empleados;
e)select cuil_cuit from empleados;
f)select concat_ws(' ' ,(nombre ,apellido)) as combinada 
from empleados;
h) select lower(concat_ws(' ' ,nombre ,apellido)) from empleados;
g)select  UPPER(concat_ws(' ' ,nombre ,apellido)) from empleados;
l)select nombre, apellido from empleados order by apellido , nombre;
i)select nombre, presupuesto as valor_actual  from departamentos order by presupuesto, nombre asc;
j)select nombre , presupuesto from departamentos order by nombre asc;
k)select nombre from departamentos order by nombre desc;
m) select nombre, presupuesto from departamentos where presupuesto < 1;
n) select nombre, presupuesto from departamentos where presupuesto >= 150000;
o) select nombre, presupuesto from departamentos where presupuesto >= 150000;
p)select nombre, presupuesto from departamentos where presupuesto > 100000  and presupuesto < 200000;
q) select nombre, presupuesto from departamentos where presupuesto in('280000',375000,0);
r)select nombre, presupuesto from departamentos where presupuesto BETWEEN 100000 and 200000;
s) select empleados.nombre , empleados.apellido, departamentos.nombre from empleados inner join departamentos on empleados.departamento= departamentos.departamento_id ;
t)select empleados.nombre , empleados.apellido, departamentos.nombre from empleados inner join departamentos on empleados.departamento= departamentos.departamento_id  ;
u) select departamento_id as codigo,nombre from departamentos where departamento_id in(select departamento from empleado );
v) select  departamentos.nombre from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.cuil_cuit="27-38382980-3" ;
w) select  departamentos.nombre from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.nombre= "PepeRuiz" ;
x) select empleados.*
from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.nombre= "I+D"  
order by empleados.nombre, apellido
y)select empleados.*
from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.nombre= "Sistemas"  
order by empleados.nombre, apellido
